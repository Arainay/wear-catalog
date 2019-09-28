import ApiService from '@app/services/ApiService';

export default class CatalogService extends ApiService {
  constructor() {
    super();

    this.baseUrl = `${this.baseUrl}/catalog`
  }

  getCatalog() {
    return this.get('');
  }

  getCollections() {
    return this.get('/collections');
  }

  getCollectionByName(name) {
    return this.get(`/${name}`);
  }

  getCollectionByNameAndLimit(name, limit) {
    return this.get(`/${name}/${limit}`);
  }
}
