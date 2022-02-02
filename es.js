// =================================================================
//	Déclaration des paramètres de connexion
// =================================================================

const elasticUrl = process.env.ELASTIC_URL || 'http://localhost:9200';
const elasticRepo = process.env.ELASTIC_REPO || '/applis/conditor/home/backup';
const elasticIndex = process.env.ELASTIC_INDEX || 'records';
const elasticAuth = process.env.ELASTIC_AUTH || 'elastic:elastic';

module.exports = {
	host: elasticUrl,
	index: elasticIndex,
	httpAuth: elasticAuth,
	backup_path: elasticRepo,
};
