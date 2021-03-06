// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import HaskellLintingProvider from './features/hlintProvider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext): void {
    let linter = new HaskellLintingProvider();
    linter.activate(context.subscriptions);
    vscode.languages.registerCodeActionsProvider('haskell' , linter);
}
