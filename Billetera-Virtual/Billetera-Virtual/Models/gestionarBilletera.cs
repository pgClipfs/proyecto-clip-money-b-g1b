using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Billetera_Virtual.Models
{
    public class gestionarBilletera
    {
        public int AgregarBilletera(Billetera billetera)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDBilletera"].ToString();
            int id = 0;

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "billeteraInsert";
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@nombre", billetera.Nombre));
                comm.Parameters.Add(new SqlParameter("@CVU", billetera.Cvu));
                comm.Parameters.Add(new SqlParameter("@idCuenta", billetera.Id_perfilUsuario));
                comm.Parameters.Add(new SqlParameter("@tipoDeCuenta", billetera.TipoDeCuenta));
                comm.Parameters.Add(new SqlParameter("@alias", billetera.Alias));
                comm.Parameters.Add(new SqlParameter("@numeroDeCuenta", billetera.NumeroDeCuenta));
                comm.Parameters.Add(new SqlParameter("@situacionCrediticia", billetera.SituacionCrediticia));

                id = Convert.ToInt32(comm.ExecuteScalar());
            }
            return id;

        }

        public Billetera ObtenerPorIdCuenta(int idb)
        {
            Billetera p = null;
            string StrConn = ConfigurationManager.ConnectionStrings["BDBilletera"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("billeteraSelectByIdCuenta", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@id", idb));

                SqlDataReader dr = comm.ExecuteReader();
                if (dr.Read())
                {
                    int id = dr.GetInt32(0);
                    string nombre = dr.GetString(1);
                    string CVU = dr.GetString(2);
                    string nombreCuenta = dr.GetString(3);
                    string tipoDeCuenta = dr.GetString(4);
                    string alias = dr.GetString(5);
                    string numeroDeCuenta = dr.GetString(6);
                    string situacionCrediticia = dr.GetString(7);
                    decimal saldo = dr.GetDecimal(8);

                    int idCuenta = dr.GetInt32(9);

                    p = new Billetera( nombre, CVU, tipoDeCuenta, alias, numeroDeCuenta, situacionCrediticia, idCuenta, nombreCuenta, saldo);
                }
                dr.Close();
            }
            return p;
        }
        public void ModificarBilletera(Billetera p)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDBilletera"].ToString();
            decimal saldo = 0;
             saldo = getSaldo(p.Id) + p.Saldo;
            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "updateSaldo";
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@id", p.Id));
                comm.Parameters.Add(new SqlParameter("@saldo", saldo));

                comm.ExecuteNonQuery();
            }
        }

       public decimal getSaldo(int id)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDBilletera"].ToString();
            decimal saldo = 0;
            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("selectSaldo", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@id", id));

                SqlDataReader dr = comm.ExecuteReader();
                if (dr.Read())
                {
                    saldo = dr.GetDecimal(0);

                }
                dr.Close();
                return saldo;
            }
        }
    }
}