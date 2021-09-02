"use strict";

// =================================================================
//	Déclaration des paramètres de connexion
// =================================================================

var elasticUrl = process.env.ELASTIC_URL || "http://localhost:9200";
var elasticRepo = process.env.ELASTIC_REPO || "/applis/conditor/home/backup";
var elasticIndex = process.env.ELASTIC_INDEX || "records";
var elasticAuth = process.env.ELASTIC_AUTH || "elastic:elastic";

module.exports = {
	host: elasticUrl,
	index: elasticIndex,
	httpAuth: elasticAuth,
	backup_path:elasticRepo
};
