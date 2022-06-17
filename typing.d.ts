declare Case = 'kebab' | 'upperCamelCase' | 'lowerCamelCase';
declare function changeCase(s: string, _case?: Case): string;
export = changeCase;
