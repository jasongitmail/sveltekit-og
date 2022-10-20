import { ImageResponse } from '$lib';
import type { RequestHandler } from './$types';

const template = `
 <div tw="bg-gray-50 flex w-full h-full items-center justify-center">
    <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
      <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
        <span>Ready to dive in?</span>
        <span tw="text-indigo-600">Start your free trial today.</span>
      </h2>
      <div tw="mt-8 flex md:mt-0">
        <div tw="flex rounded-md shadow">
          <a href="#" tw="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white">Get started</a>
        </div>
        <div tw="ml-3 flex rounded-md shadow">
          <a href="#" tw="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600">Learn more</a>
        </div>
      </div>
    </div>
  </div>
`;
const fontFile400 = await fetch('https://og-playground.vercel.app/inter-latin-ext-400-normal.woff');
const fontFile700 = await fetch('https://og-playground.vercel.app/inter-latin-ext-700-normal.woff');
const fontData400: ArrayBuffer = await fontFile400.arrayBuffer();
const fontData700: ArrayBuffer = await fontFile700.arrayBuffer();

export const GET: RequestHandler = async () => {
	return new ImageResponse(template, {
		height: 250,
		width: 500,
		fonts: [
			{
				name: 'Inter Latin',
				data: fontData400,
				weight: 400
			},
			{
				name: 'Inter Latin',
				data: fontData700,
				weight: 700
			}
		]
	});
};
