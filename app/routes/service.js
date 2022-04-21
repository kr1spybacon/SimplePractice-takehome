import Route from '@ember/routing/route';

export default class ServiceRoute extends Route {
  async model(params) {
    const { service_id } = params;
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://johnny-appleseed.clientsecure.me/client-portal-api/offices?filter[clinicianId]=2&filter[cptCodeId]=31822614',
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
    const { name, phone } = data[0].attributes;
    return { service_id, name, phone };
  }
}
