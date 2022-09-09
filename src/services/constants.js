//
//  Server Remote (9003 local quizclient)
//
exports.SERVER_REMOTE = 'RAILWAY'
exports.URL_REMOTE = 'https://quizserver009-production.up.railway.app'
//
//  Server Local (8003 local quizclient)
//
exports.SERVER_LOCAL = 'POSTGRESQL'
exports.URL_LOCAL = 'http://localhost:9001'
//
//  Server details
//
exports.URL_REGISTER = '/QuizRegister'
exports.URL_SIGNIN = '/QuizSignin'
exports.URL_PROFILE = '/QuizProfile/:id'
exports.URL_TABLES = '/QuizTables'
//
//  Tables
//
exports.SQL_TABLE_QUEST = 'questions'
exports.SQL_TABLE_OWNER = 'owner'
exports.SQL_TABLE_GROUP1 = 'group1'
exports.SQL_TABLE_GROUP2 = 'group2'
exports.SQL_TABLE_GROUP3 = 'group3'
exports.SQL_TABLE_REFS = 'refs'
//
//  Other Parameters
//
exports.ROWS_MAX = 2000
