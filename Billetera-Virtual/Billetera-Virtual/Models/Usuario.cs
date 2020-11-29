using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Billetera_Virtual.Models
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
        private DateTime fechaNacimiento;
        private int cuil_cuit;
        //private Byte fotoDniFrente;
        //private Byte fotoDniRev;
        private string estado = "false";

        public Usuario(int id, string nombreCuenta, string password, string email, string nombre, string apellido, int dni,
                        DateTime fechaNacimiento, int cuil_cuit, /*Byte fotoDniFrente, Byte fotoDniRev,*/ string estado)
        {
            this.id = id;
            this.nombreCuenta = nombreCuenta;
            this.password = password;
            this.email = email;
            this.nombre = nombre;
            this.apellido = apellido;
            this.dni = dni;
            this.fechaNacimiento = fechaNacimiento;
            this.cuil_cuit = cuil_cuit;
            //this.fotoDniFrente = fotoDniFrente;
            //this.fotoDniRev = fotoDniRev;
            this.estado = estado;
        }

        public Usuario()
        {
        }

        public Usuario(int id, string nombre, string apellido, int dni)
        {
            this.id = id;
            this.nombre = nombre;
            this.apellido = apellido;
            this.dni = dni;
        }

        public int Id { get => id; set => id = value; }
        public string NombreCuenta { get => nombreCuenta; set => nombreCuenta = value; }
        public string Password { get => password; set => password = value; }
        public string Email { get => email; set => email = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Apellido { get => apellido; set => apellido = value; }
        public int Dni { get => dni; set => dni = value; }
        public DateTime FechaNacimiento { get => fechaNacimiento; set => fechaNacimiento = value; }
        public int Cuil_Cuit { get => cuil_cuit; set => cuil_cuit = value; }
        //public Byte FotoDniFrente { get => fotoDniFrente; set => fotoDniFrente = value; }
        //public Byte FotoDniRev { get => fotoDniRev; set => fotoDniRev = value; }
        public string Estado { get => estado; set => estado = value; }

    }
}