using CursosApi.Context;
using CursosApi.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace CursosApi.Repository
{
    public class CursoRepository
    {
        public readonly DataContext _context;

        public CursoRepository(DataContext context)
        {
            _context = context;
        }

        public  IEnumerable<Escola> Get()
        {
            var cursos =  _context.cursos.AsNoTracking().ToList();
            return cursos;
        }

        public Escola GetId (int id)
        {
            return _context.cursos.Find(id);
        }

        public void Save(Escola escola)
        {
             _context.cursos.Add(escola);
            _context.SaveChanges();
        }

        public void Update(Escola escola)
        {
            _context.Entry<Escola>(escola).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Remove(int id)
        {
            var curso = _context.cursos.AsNoTracking().Where(x => x.Id == id).FirstOrDefault();
            _context.cursos.Remove(curso);
            _context.SaveChanges();
        }
    }
}
