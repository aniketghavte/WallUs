
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'eo01n2kd',
  dataset: 'production',
  apiVersion: '2022-11-01',
  useCdn: true,
  token: 'skCV3lqp7xfVffk1zoLJmuw25DUgvAOLmZeXlFxgO0KdPjhzQ7wew9cDDDx4m5p5Qj4LwFSU2fxfpVDhbBjKM1BfuSOQ2gsj25cQuipYODBPp5HcRAU8Io0VcllYAc1kQubeTueB0wbUClbIdYWOvNqPnwzw64H5Z4aQbBugxpNXITtneEpc',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

