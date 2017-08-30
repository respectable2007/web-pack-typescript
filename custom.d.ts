/*导入其他类型时，需要创建此文件，用来编写自定义的类型*/
declare module "*.svg"{
	const content: any;
	export default content;
}