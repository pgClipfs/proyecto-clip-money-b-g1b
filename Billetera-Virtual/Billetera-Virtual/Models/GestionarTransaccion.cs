using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Billetera_Virtual.Models
{
    public class GestionarTransaccion
    {
        public int AgregarTransaccion(Transaccion nuevo)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDBilletera"].ToString();
            int id = 0;

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "insertTransacciones";
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@idBilletera", nuevo.Id_billetera));
                comm.Parameters.Add(new SqlParameter("@idCuentaDestino", nuevo.Id_cuentaDestino));
                comm.Parameters.Add(new SqlParameter("@idOperacion", nuevo.Id_operacion));
                comm.Parameters.Add(new SqlParameter("@monto", nuevo.Monto));
                comm.Parameters.Add(new SqlParameter("@descripcion", nuevo.Descripcion));

                id = Convert.ToInt32(comm.ExecuteScalar());
            }
            return id;

        }

        public Transaccion buildTransaccion(AuxClass auxClass) { 
         Billetera billeteraCuentaDestino = new Billetera();
            billeteraCuentaDestino = getbyCvu(auxClass.Cvu);
            int idBilletera = getPorIdCuenta(auxClass.IdCuenta);
            int operacion = getoperacion(auxClass.Operacion);
            Billetera propia = new Billetera(auxClass.IdCuenta, (auxClass.Monto*-1));
            Billetera destino = new Billetera(billeteraCuentaDestino.Id_perfilUsuario, auxClass.Monto);
            Transaccion transaccion = new Transaccion(idBilletera, billeteraCuentaDestino.Id, operacion, auxClass.Monto, auxClass.Descripcion);
            if(AgregarTransaccion(transaccion) != 0)
            {
                gestionarBilletera gBilletera = new gestionarBilletera();
                gBilletera.ModificarBilletera(propia);
                gBilletera.ModificarBilletera(destino);
           
            return transaccion;
            }
            else
            {
                return null;
            }


        }

        int getPorIdCuenta(int id)
        {
            int p = 0;
            string StrConn = ConfigurationManager.ConnectionStrings["BDBilletera"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("selectBilleteraIDByCuentaId", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@idCuenta", id));

                SqlDataReader dr = comm.ExecuteReader();
                if (dr.Read())
                {
                    int idb = dr.GetInt32(0);
                    p = idb;
                }
                dr.Close();
            }
            return p;
        }
        Billetera getbyCvu(string idb)
        {
            Billetera p = null;
            string StrConn = ConfigurationManager.ConnectionStrings["BDBilletera"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("SelectBilleteraByCbu", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@cvu", idb));

                SqlDataReader dr = comm.ExecuteReader();
                if (dr.Read())
                {
                    int id = dr.GetInt32(0);
                    int id_perfilUsuario = dr.GetInt32(1);
                    p = new Billetera(id, id_perfilUsuario);
                }
                dr.Close();
            }
            return p;
        }
        int getoperacion(string operacion)
        {
            int p = 0;
            string StrConn = ConfigurationManager.ConnectionStrings["BDBilletera"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("SelectOperacion", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@nombre", operacion));

                SqlDataReader dr = comm.ExecuteReader();
                if (dr.Read())
                {
                    int idb = dr.GetInt32(0);
                    p = idb;
                }
                dr.Close();
            }
            return p;
        }
    }
}