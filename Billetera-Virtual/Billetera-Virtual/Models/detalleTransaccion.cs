using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Billetera_Virtual.Models
{
    public class detalleTransaccion
    {
        int id;
        string motivo;
        string descripcion;
        double monto;
        DateTime fecha;
        int idTransaccion;

        public detalleTransaccion() { }

        public detalleTransaccion(string motivo, string descripcion, double monto, DateTime fecha, int idTrandaccion)
        {
            this.motivo = motivo;
            this.descripcion = descripcion;
            this.monto = monto;
            this.fecha = fecha;
            this.IdTransaccion = idTrandaccion;
        }

        public int Id { get => id; set => id = value; }
        public string Motivo { get => motivo; set => motivo = value; }
        public string Descripcion { get => descripcion; set => descripcion = value; }
        public double Monto { get => monto; set => monto = value; }
        public DateTime Fecha { get => fecha; set => fecha = value; }
        public int IdTransaccion { get => idTransaccion; set => idTransaccion = value; }
    }
}