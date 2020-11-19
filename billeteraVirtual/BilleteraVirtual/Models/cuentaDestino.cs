using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BilleteraVirtual.Models
{
 
    public class CuentaDestino
    {
        private int id;
        private String cbu;
        private String cuil;
        private String tidoDeCuenta;
        private String aliasCuentaDestino;


        public CuentaDestino()
        {

        }

        public int Id { get => id; }
        public string Cbu { get => cbu; set => cbu = value; }
        public string Cuil { get => cuil; set => cuil = value; }
        public string TidoDeCuenta { get => tidoDeCuenta; set => tidoDeCuenta = value; }
        public string AliasCuentaDestino { get => aliasCuentaDestino; set => aliasCuentaDestino = value; }
    }
}