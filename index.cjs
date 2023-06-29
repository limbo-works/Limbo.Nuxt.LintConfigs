import eslint from '.eslintrc.cjs';
import prettier from '.prettierrc.cjs';

exports.eslint = eslint;
exports.prettier = prettier;
exports.default = { eslint, prettier };
