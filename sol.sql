-- possible solution


SELECT DATE(date_column) AS day, SUM(amount_column) AS total_amount
FROM your_table_name
GROUP BY DAY(date_column)
ORDER BY DAY(date_column);


-- use Illuminate\Support\Facades\DB;
--
-- $results = YourModel::select(DB::raw('DATE(date_column) as day'), DB::raw('SUM(amount_column) as total_amount'))
--                                                               ->groupBy(DB::raw('DAY(date_column)'))
--                                                               ->orderBy(DB::raw('DAY(date_column)'))
--                                                               ->get();
