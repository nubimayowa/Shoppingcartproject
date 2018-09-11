﻿using Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Services.Controllers
{
    [EnableCors("*", "*", "*")]
    public class forSignUpController : ApiController
    {
        [HttpPost, Route("api/signup")]
        public IHttpActionResult GetAllSignup(signupData signupData ) // name of the model + ...\ 
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using(var ctx = new MayowaaEntities())
                    {
                        ctx.SignUps.Add(new SignUp
                        {
                            emailAddress = signupData.emailAddress,
                            firstName = signupData.firstName,
                            lastName = signupData.lastName,
                            passWord = signupData.passWord
                        });
                        ctx.SaveChanges();
                    }
                    return Ok(HttpStatusCode.Created);
                }
                else
                {
                    return BadRequest("Model State Not Valid");
                }
            }
            catch(Exception  ex)
            {
                throw ex.InnerException;
            }
        }
        [HttpPost, Route ("api/login")]
        public IHttpActionResult postuser (signupData logindata)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    using (var ctx = new MayowaaEntities())
                    {
                       
                            var response = ctx.SignUps
                                .Where(c => c.emailAddress == logindata.emailAddress && c.passWord == logindata.passWord)
                                .SingleOrDefault();
                            if (response != null)
                            {
                                return Ok(response);
                            }
                        else
                        {
                            return Ok("Email and Password is not correct");
                        }
                    }
                    
                
                }
                catch (Exception)
                {

                    throw;
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpGet, Route("api/getregisteruser")]
        public IHttpActionResult GetAllTheUsers()
        {
          
            using (var ctx = new MayowaaEntities())
            {
                var signupData1 = ctx.SignUps.ToList().ToString();
                if (signupData1 == null)
                {
                    return NotFound();
                }
                return Ok(signupData1 + "sucessfully gotten user");
            }
            

        }
        [HttpGet, Route("api/getuserbyid/{id}")]
        public IHttpActionResult GetUsersById(int id)
        {
            using (var ctx= new MayowaaEntities())
            {
                var signupData3 = ctx.SignUps.Where(s => s.id == id).ToList();
                   
                if (signupData3 == null)
                {
                    return NotFound();
                }
                return Ok(signupData3 + "succesfully gotten user by their id");
            }
           
            
        }
        [HttpDelete, Route("api/deleteuserbyid/{id}")]
        public IHttpActionResult Delete (int id)
        {
            if (id <=0)
                return BadRequest("Not a valid user id");
            using (var ctx = new MayowaaEntities())
            {
                var signupdata4 = ctx.SignUps.Where(s => s.id == id).FirstOrDefault();
                ctx.Entry(signupdata4).State = System.Data.Entity.EntityState.Deleted;
                ctx.SaveChanges();
            }
            return Ok ("deleted successfully");
        }

        [HttpPut, Route ("api/putuserbyid/{id}")]
        public IHttpActionResult Put(int id,signupData signupData)
        {
            if (!ModelState.IsValid)
                return BadRequest("NOT A VALID MODEL");


            using (var ctx = new MayowaaEntities())

            {
                var existingusers = ctx.SignUps.Where(s => s.id == id).FirstOrDefault<SignUp>();
                if (existingusers != null)
                {
                    existingusers.firstName = signupData.firstName;
                    existingusers.lastName = signupData.lastName;
                    existingusers.emailAddress = signupData.emailAddress;
                    existingusers.passWord = signupData.passWord;
                    ctx.SaveChanges();
                    return Ok("update successful");
                }
                else
                {
                    return NotFound();
                }




            }

           

                    

                
                 

            

        }

    }
     
}
