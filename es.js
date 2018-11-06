"use strict";

// =================================================================
//	Déclaration des paramètres de connexion
// =================================================================

var elasticUrl = process.env.ELASTIC_URL || "http://localhost:9200";
var elasticRepo = process.env.ELASTIC_REPO || "/applis/conditor/home/backup";
var elasticIndex = process.env.ELASTIC_INDEX || "records";
var elasticType = process.env.ELASTIC_TYPE || "record";

module.exports = {
	host: elasticUrl,
	index: elasticIndex,
	type: elasticType,
	backup_path:elasticRepo
};
