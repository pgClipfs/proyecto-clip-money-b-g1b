using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Configuration;

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
                comm.CommandText = "usuarioInsert";
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@password", nuevo.Password));
                comm.Parameters.Add(new SqlParameter("@email", nuevo.Email));

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
                    string nombre = dr.GetString(4).Trim();
                    string apellido = dr.GetString(5).Trim();
                    int dni = dr.GetInt32(6);

                    Usuario p = new Usuario(id, nombre, apellido, dni);
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
                    string nombreCuenta = dr.GetString(1);
                    string password = dr.GetString(2);
                    string email = dr.GetString(3);
                    string nombre = dr.GetString(4);
                    string apellido = dr.GetString(5);
                    int dni = dr.GetInt32(6);
                    DateTime fechaNacimiento = dr.GetDateTime(7);
                    int cuil_cuit = dr.GetInt32(8);
                    //Byte fotoDniFrente = dr.GetByte(9);
                    //Byte fotoDniRev = dr.GetByte(10);
                    string estado = dr.GetString(11);

                    p = new Usuario(id, nombreCuenta, password, email, nombre, apellido, dni, fechaNacimiento, cuil_cuit, /*fotoDniFrente, fotoDniRev,*/ estado);
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
                comm.Parameters.Add(new SqlParameter("@nombreCuenta", p.NombreCuenta));
                comm.Parameters.Add(new SqlParameter("@password", p.Password));
                comm.Parameters.Add(new SqlParameter("@email", p.Email));
                comm.Parameters.Add(new SqlParameter("@nombre", p.Nombre));
                comm.Parameters.Add(new SqlParameter("@apellido", p.Apellido));
                comm.Parameters.Add(new SqlParameter("@dni", p.Dni));
                comm.Parameters.Add(new SqlParameter("@fechaNacimiento", p.FechaNacimiento));
                comm.Parameters.Add(new SqlParameter("@cuil_cuit", p.Cuil_Cuit));
                //comm.Parameters.Add(new SqlParameter("@fotoDniFrente", p.FotoDniFrente));
                //comm.Parameters.Add(new SqlParameter("@fotoDniRev", p.FotoDniRev));

                comm.ExecuteNonQuery();
            }
        }
    }
}