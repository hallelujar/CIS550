select SQL_NO_CACHE P.Name, SP.AST
from SeasonPerformance SP
natural join Player P natural join PlaysFor natural join Season S where S.Start_Year = 2014
order by SP.AST desc limit 10