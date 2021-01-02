using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Configuration;
using System.Security.Claims;

namespace Billetera_Virtual.Models
{
    public class GestorUsuario
    {
        public int AgregarUsuario(Usuario nuevo)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDBilletera"].ToString();
            int id = 0;

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "insertar_usuario";
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@email", nuevo.Email));
                comm.Parameters.Add(new SqlParameter("@password", nuevo.Password));

                id = Convert.ToInt32(comm.ExecuteScalar());
            }
            return id;
        }

        public List<Usuario> ObtenerUsuarios()
        {
            List<Usuario> lista = new List<Usuario>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDBilletera"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "obtener_usuarios";
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    int id = dr.GetInt32(0);
                    string email = dr.GetString(1).Trim();
                    string password = dr.GetString(2).Trim();
                    string estado = dr.GetString(3);

                    Usuario p = new Usuario(id, email, password, estado);
                    lista.Add(p);
                }

                dr.Close();
            }

            return lista;
        }

        public void Eliminar(int id)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDBilletera"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("deleteUsuario", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@Id", id));

                comm.ExecuteNonQuery();
            }

        }

        public Usuario ObtenerIdPorLogin(LoginUsuario uloginRequest)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDBilletera"].ToString();
            var usuario = new Usuario();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("obtener_usuarioLogin", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@email", uloginRequest.Email));
                comm.Parameters.Add(new SqlParameter("@password", uloginRequest.Password));

                SqlDataReader dr = comm.ExecuteReader();

                if (dr.Read())
                {
                    int id = dr.GetInt32(0);

                    usuario = new Usuario(id);
                }
                dr.Close();

            }
            return usuario;
        }

        public Usuario ObtenerPorId(int id)
        {
            Usuario p = null;
            string StrConn = ConfigurationManager.ConnectionStrings["BDBilletera"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("obtener_usuario", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@id", id));

                SqlDataReader dr = comm.ExecuteReader();
                if (dr.Read())
                {
                    string nombre = dr.GetString(1);
                    string apellido = dr.GetString(2);
                    string dni = dr.GetString(3);
                    string genero = dr.GetString(4);
                    string fechaNacimiento = dr.GetString(5);
                    string cuil_cuit = dr.GetString(6);
                    string calle = dr.GetString(7);
                    string numero_de_calle = dr.GetString(8);
                    string barrio = dr.GetString(9);
                    string codigo_postal = dr.GetString(10);
                    string ciudad = dr.GetString(11);

                    p = new Usuario(id, nombre, apellido, dni, genero, fechaNacimiento, cuil_cuit, calle, numero_de_calle, barrio, codigo_postal, ciudad);
                }
                dr.Close();
            }
            return p;
        }


        public void ModificarUsuario(Usuario p)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDBilletera"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "update_Usuario";
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@id", p.Id));
                comm.Parameters.Add(new SqlParameter("@nombre", p.Nombre));
                comm.Parameters.Add(new SqlParameter("@apellido", p.Apellido));
                comm.Parameters.Add(new SqlParameter("@dni", p.Dni));
                comm.Parameters.Add(new SqlParameter("@genero", p.Genero));
                comm.Parameters.Add(new SqlParameter("@fechaNacimiento", p.FechaNacimiento));
                comm.Parameters.Add(new SqlParameter("@cuil_cuit", p.Cuil_Cuit));
                comm.Parameters.Add(new SqlParameter("@calle", p.Calle));
                comm.Parameters.Add(new SqlParameter("@numero_de_calle", p.Numero_de_calle));
                comm.Parameters.Add(new SqlParameter("@barrio", p.Barrio));
                comm.Parameters.Add(new SqlParameter("@codigo_postal",p.Codigo_postal));
                comm.Parameters.Add(new SqlParameter("@ciudad",p.Ciudad));



                comm.ExecuteNonQuery();
            }
        }
    }
}