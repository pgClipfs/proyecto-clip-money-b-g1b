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
        private float motivo;
        private DateTime fecha;


        public Transaccion(int id, int id_billetera, int id_cuentaDestino, int id_operacion, float motivo, DateTime fecha)
        {
            this.id = id;
            this.id_billetera = id_billetera;
            this.id_cuentaDestino = id_cuentaDestino;
            this.id_operacion = id_operacion;
            this.motivo = motivo;
            this.fecha = fecha;
        }

        public int Id { get => id; }
        public int Id_billetera { get => id_billetera; set => id_billetera = value; }
        public int Id_cuentaDestino { get => id_cuentaDestino; set => id_cuentaDestino = value; }
        public int Id_operacion { get => id_operacion; set => id_operacion = value; }
        public float Motivo { get => motivo; set => motivo = value; }
        public DateTime Fecha { get => fecha; set => fecha = value; }
    }
}