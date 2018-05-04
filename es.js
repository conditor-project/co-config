"use strict";

// =================================================================
//	Déclaration des paramètres de connexion
// =================================================================

var elasticUrl = process.env.ELASTIC_URL || "http://localhost:9200";
var elasticRepo = process.env.ELASTIC_REPO || "/applis/conditor/home/backup";

module.exports = {
	host: elasticUrl,
	index:"records",
	type: "record",
	backup_path:elasticRepo
};
