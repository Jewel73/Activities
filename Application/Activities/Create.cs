using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Query : IRequest{
            public Activity activity;
        };

        public class Handler : IRequestHandler<Query>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Query request, CancellationToken cancellationToken)
            {
                _context.Activities.Add(request.activity);
                await _context.SaveChangesAsync();
               return Unit.Value;
            }
        }
    }
}