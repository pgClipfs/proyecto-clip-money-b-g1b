using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Configuration;

namespace Billetera_Virtual.Models
{
    public class GestorLogin
    {
        public bool ValidarLogin(LoginUsuario uloginRequest)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDBilletera"].ToString();
            bool result = false;

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("obtener_login", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@email", uloginRequest.Email));
                comm.Parameters.Add(new SqlParameter("@password", uloginRequest.Password));

                SqlDataReader reader = comm.ExecuteReader();

                if (reader.HasRows)
                {
                    result = true;
                }

            }
            return result;

        }
    }
}