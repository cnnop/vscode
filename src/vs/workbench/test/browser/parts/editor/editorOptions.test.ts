/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import * as assert from 'assert';
import {EditorOptions, TextEditorOptions} from 'vs/workbench/common/editor';

suite('Workbench - EditorOptions', () => {

	test('EditorOptions', function () {
		let options = new EditorOptions();
		let otherOptions = new EditorOptions();

		assert(!options.preserveFocus);
		options.preserveFocus = true;
		assert(options.preserveFocus);
		assert(!options.forceOpen);
		options.forceOpen = true;
		assert(options.forceOpen);
		assert(options.matches(options));
		assert(!options.matches(null));
		assert(!options.matches(otherOptions));

		options = new EditorOptions();
		options.forceOpen = true;
	});

	test('TextEditorOptions', function () {
		let options = new TextEditorOptions();
		let otherOptions = new TextEditorOptions();

		assert(options.matches(options));
		assert(!options.matches(null));
		assert(options.matches(otherOptions));

		assert(!options.hasOptionsDefined());
		options.selection(1, 1, 2, 2);
		assert(options.hasOptionsDefined());
		assert(!options.matches(otherOptions));

		otherOptions.selection(1, 1, 2, 2);
		assert(options.matches(otherOptions));

		options = new TextEditorOptions();
		options.forceOpen = true;
		options.selection(1, 1, 2, 2);

		options = new TextEditorOptions();
		options.viewState({});
		assert(options.hasOptionsDefined());
	});
});