using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Billetera_Virtual.Models
{
    public class AuxClass
    {
        private string operacion;
        private string cvu;
        private int idCuenta;
        private decimal monto;
        private string descripcion;
        public AuxClass(string operacion, string cvu, int idCuenta, decimal monto, string descripcion)
        {
            this.Operacion = operacion;
            this.Cvu = cvu;
            this.IdCuenta = idCuenta;
            this.Monto = monto;
            this.Descripcion = descripcion;
        }

        public string Operacion { get => operacion; set => operacion = value; }
        public string Cvu { get => cvu; set => cvu = value; }
        public int IdCuenta { get => idCuenta; set => idCuenta = value; }
        public decimal Monto { get => monto; set => monto = value; }
        public string Descripcion { get => descripcion; set => descripcion = value; }
    }
}