using CursosApi.Models;
using CursosApi.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace CursosApi.Controllers
{
    [ApiController]
    [Route("api")]
    public class CursoController : Controller
    {

        private readonly CursoRepository _repository;

        public CursoController(CursoRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        [Route("cursos")]
        public IEnumerable<Escola> Get()
        {
            return _repository.Get();

        }

        [HttpGet]
        [Route("{id}")]
        public Escola GetId(int id)
        {
            return _repository.GetId(id); // OK funcionando
        }

        [HttpPost]
        [Route("")]
        public Escola Post([FromBody]Escola escola)
        {
            _repository.Save(escola); // OK Funcionando
            return escola;
        }

        [HttpPut]
        [Route("")]
        public Escola Put([FromBody]Escola escola)
        {
            _repository.Update(escola); //OK funcionando
            return escola;
        }

        [HttpDelete]
        [Route("{id}")]
        public Escola Delete([FromBody]Escola escola, int id)
        {
            _repository.Remove(id); //OK funcionando
            return escola;
        }
    }
}
