using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;

namespace BilleteraVirtual.Models
{
 
    public class Usuario
    {
        private int id;
        private string nombreCuenta;
        private string password;
        private string email;
        private string nombre;
        private string apellido;
        private int dni;
        private DateTime nacimiento;
        private string cuitCuil;
        private Boolean estado = false;

        public int Id { get => id; }
        public string NombreCuenta { get => nombreCuenta; set => nombreCuenta = value; }
        public string Password { get => password; set => password = value; }
        public string Email { get => email; set => email = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Apellido { get => apellido; set => apellido = value; }
        public int Dni { get => dni; set => dni = value; }
        public DateTime Nacimiento { get => nacimiento; set => nacimiento = value; }
        public string CuitCuil { get => cuitCuil; set => cuitCuil = value; }
        public bool Estado { get => estado; set => estado = value; }

        //constructor full



        //constructor simple
        public Usuario(string nombreCuenta, string password, string email, bool estado)
        {

            this.NombreCuenta = nombreCuenta;
            this.Password = password;
            this.Email = email;
            this.Estado = estado;
        }


    }
}