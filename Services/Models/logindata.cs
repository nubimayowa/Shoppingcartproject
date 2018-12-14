using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

using System.Web;

namespace Services.Models
{
    public class logindata
    {
        [Required (ErrorMessage="Please enter EmailAddress")]
        [RegularExpression("^[a-z0-9_\\+-]+(\\.[a-z0-9_\\+-]+)*@[a-z0-9-]+(\\.[a-z0-9]+)*\\.([a-z]{2,4})$", ErrorMessage = "Invalid email format.")]
        public string emailAddress { get; set; }

       
        [Required (ErrorMessage = "Please enter Password")]
        public string passWord { get; set; }

        
    }
}