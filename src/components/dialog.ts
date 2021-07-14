interface MyPanel extends Window {
    textGroup: {
        label: StaticText;
        count: EditText;
    }
    buttons: {
        executeBtn: Button;
        cancelBtn: Button;
    }
}

const dialog = (title: string) => {
    const windowRef = `dialog { 
	    text: '${title}', 
	    orientation: 'column', 
	    alignChildren: 'fill', 
		textGroup: Group { 
			label: StaticText { text: '数値入力　: ' }, 
			count: EditText { text: 22, characters: 4, justify: 'right', enabled: true  }, 
		} 
		buttons: Group{ 
			orientation: 'row', 
			alignChildren: 'right', 
			executeBtn: Button { text: '実行' }
			cancelBtn: Button { text: 'キャンセル' }
		}, 
    }`;

    const w = new Window(windowRef) as MyPanel;

    w.buttons.executeBtn.onClick = () => { alert('実行ボタンが押されました') };
    w.buttons.cancelBtn.onClick = () => { w.close(); }
    w.defaultElement = w.buttons.executeBtn;
    w.cancelElement = w.buttons.cancelBtn;

    w.show();
}
export default dialog;