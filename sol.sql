-- possible solution


SELECT DATE(trans_date) AS day, SUM(amt) AS balance
FROM `user_transactions`
WHERE trans_type_id = 386
GROUP BY DAY(trans_date)
ORDER BY DAY(trans_date)
DESC;

SELECT SUM(amt) from `user_transactions` WHERE trans_type_id = 386;

-- use Illuminate\Support\Facades\DB;
--
-- $results = YourModel::select(DB::raw('DATE(date_column) as day'), DB::raw('SUM(amount_column) as total_amount'))
--                                                               ->groupBy(DB::raw('DAY(date_column)'))
--                                                               ->orderBy(DB::raw('DAY(date_column)'))
--                                                               ->get();
