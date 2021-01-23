using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Billetera_Virtual.Models
{
    public class Transaccion
    {
        private int id;
        private int id_billetera;
        private int id_cuentaDestino;
        private int id_operacion;
        private decimal monto;
        private string descripcion;
        private string nombreBilletera;
        private string nombreBilleteraDestino;
        private string operacion;


        public Transaccion(int id, int id_billetera, int id_cuentaDestino, int id_operacion)
        {
            this.id = id;
            this.id_billetera = id_billetera;
            this.id_cuentaDestino = id_cuentaDestino;
            this.id_operacion = id_operacion;
        }
        public Transaccion(int id_billetera, int id_cuentaDestino, int id_operacion, decimal monto, string descripcion)
        {
            this.id_billetera = id_billetera;
            this.id_cuentaDestino = id_cuentaDestino;
            this.id_operacion = id_operacion;
            this.Monto = monto;
            this.descripcion = descripcion;
        }
        public Transaccion(int id)
        {
            this.id = id;
        }
        public Transaccion()
        {
           
        }

        public Transaccion(decimal monto, string descripcion, string nombreBilletera, string nombreBilleteraDestino, string operacion)
        {
            this.monto = monto;
            this.descripcion = descripcion;
            this.nombreBilletera = nombreBilletera;
            this.nombreBilleteraDestino = nombreBilleteraDestino;
            this.operacion = operacion;
        }

        public int Id { get => id; set => id = value; }
        public int Id_billetera { get => id_billetera; set => id_billetera = value; }
        public int Id_cuentaDestino { get => id_cuentaDestino; set => id_cuentaDestino = value; }
        public int Id_operacion { get => id_operacion; set => id_operacion = value; }
        public decimal Monto { get => monto; set => monto = value; }
        public string Descripcion { get => descripcion; set => descripcion = value; }
        public string NombreBilletera { get => nombreBilletera; set => nombreBilletera = value; }
        public string NombreBilleteraDestino { get => nombreBilleteraDestino; set => nombreBilleteraDestino = value; }
        public string Operacion { get => operacion; set => operacion = value; }

    }
}