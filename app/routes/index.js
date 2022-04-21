import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch(
      'https://cors-anywhere.herokuapp.com/https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes?filter[clinicianId]=2',
      {
        headers: {
          Accept: 'application/vnd.api+json',
          'Api-Version': '2020-01-01',
          'Application-Build-Version': '0.0.1',
          'Application-Platform': 'web',
        },
      }
    );
    const { data } = await response.json();
    return data.map((service) => {
      const { attributes, id } = service;
      const { description, duration } = attributes;
      return { id, description, duration };
    });
  }
}
