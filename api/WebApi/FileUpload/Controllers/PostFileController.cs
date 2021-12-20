using System.Configuration;

using System.Net;

using System.Web.Http;
using System.Collections.Generic;

using System.Web;
using System.Net.Http;
using System.Data;
using System.Data.SqlClient;
using FileUpload.Models;
using System;

namespace FileUpload.Controllers
{
    public class PostFileController : ApiController
    {

        public HttpResponseMessage Get()
        {
            string query = @"
            select Id, Flname, Flpath
            from dbo.PostFile";
                
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["FileAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);


        }

        public string Post(PostFile flname)
        {
            try
            {
                string query = @"
                    insert into dbo.PostFile values
                    (
                    '" + flname.Flname + @"'
                    ,'" + flname.Flpath + @"'
                    )
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["FileAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Added Successfully!!";
            }
            catch (Exception)
            {

                return "Failed to Add!!";
            }
        }

        public string Delete(int id)
        {
            try
            {
                string query = @"
                    delete from dbo.PostFile 
                    where Id=" + id + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["FileAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Deleted Successfully!!";
            }
            catch (Exception)
            {

                return "Failed to Delete!!";
            }
        }


        [Route("api/PostFile/GetAllFileNames")]
        [HttpGet]
        public HttpResponseMessage GetAllFileNames()
        {
            string query = @"
                    select Flname from dbo.PostFile";

            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["FileAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        [Route("api/PostFile/SaveFile")]
        public string SaveFile()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = HttpContext.Current.Server.MapPath("~/uploads/" + filename);

                postedFile.SaveAs(physicalPath);

                return filename;
            }
            catch (Exception)
            {

                return "anonymous";
            }
        }

    }

}


