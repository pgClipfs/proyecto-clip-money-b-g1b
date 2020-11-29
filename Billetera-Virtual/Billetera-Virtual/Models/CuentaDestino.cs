using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Billetera_Virtual.Models
{
    public class CuentaDestino
    {
        private int id;
        private string cbu;
        private string cuil;
        private string tipoDeCuenta;
        private string aliasCuentaDestino;


        public CuentaDestino(int id, string cbu, string cuil, string tipoDeCuenta, string aliasCuentaDestino)
        {
            this.id = id;
            this.cbu = cbu;
            this.cuil = cuil;
            this.tipoDeCuenta = tipoDeCuenta;
            this.aliasCuentaDestino = aliasCuentaDestino;
        }

        public int Id { get => id; }
        public string Cbu { get => cbu; set => cbu = value; }
        public string Cuil { get => cuil; set => cuil = value; }
        public string TipoDeCuenta { get => tipoDeCuenta; set => tipoDeCuenta = value; }
        public string AliasCuentaDestino { get => aliasCuentaDestino; set => aliasCuentaDestino = value; }
    }
}