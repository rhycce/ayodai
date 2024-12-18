export interface IFeature {
  enabled: boolean
  name: string
  description: string
  added: Date
}

export const Features = {
  ZipcodeTaxLookup: {
    enabled: false,
    name: 'ZipcodeTaxLookup',
    description:
      'Enables dynamic lookup of property taxes by input zipcode via api',
    added: new Date('08/18/2024'),
  },
}
