using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Services.Models
{
    public class signupData 



    {

        public int userID { get; set; }





        [Required(ErrorMessage ="Name is required ")]
        [StringLength(20  )]
        public string firstName { get; set; }


       
        [Required(ErrorMessage ="Lastname is required")]
        public string lastName { get; set; }

        


        [RegularExpression("^[a-z0-9_\\+-]+(\\.[a-z0-9_\\+-]+)*@[a-z0-9-]+(\\.[a-z0-9]+)*\\.([a-z]{2,4})$", ErrorMessage = "Invalid email format.")]
        public string emailAddress { get; set; }

        [Required(ErrorMessage ="password is required") ]
        [DataType (DataType.Password)]
        public string passWord { get; set; }
        
        [Required(ErrorMessage = "confirmPassword is required")]
        [DataType(DataType.Password)]
        [System.ComponentModel.DataAnnotations.Compare("passWord")]
        public string confirmPassword { get; set; }
    }

    public class response
    {

        public stateparameters State { get; set; }
        public string Msg { get; set; }
        public object Data { get; set; }
    }

    public enum stateparameters
    {
        success= 1,
        failed = 0
    }
}