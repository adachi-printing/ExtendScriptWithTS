export class PaletteDemo {
    public isShow = false;
    private w: MyPalette;
    // ********************************************* 
    // thanks for https://www.davidebarranca.com/2012/10/scriptui-window-in-photoshop-palette-vs-dialog/#disqus_thread
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    private windowResource = `palette {
        orientation: 'column',
        alignChildren: ['fill', 'top'],
        preferredSize: [300, 130],
        text: 'ScriptUI Window - palette',
        margins:15,
        sliderPanel: Panel {
            orientation: 'row',
            alignChildren: 'right',
            margins:15,
            text: ' PANEL ',
            st: StaticText { text: 'Value:' },
            slider: Slider { minvalue: 1, maxvalue: 100, value: 30, size:[220,20] },
            edittext: EditText { text: '30', characters: 5, justify: 'left'}
        },
        bottomGroup: Group {
            cd: Checkbox { text:'Checkbox value', value: true },
            cancelButton: Button { text: 'Cancel', properties:{name:'cancel'}, size: [120,24], alignment:['right', 'center'] },
            applyButton: Button { text: 'Apply', properties:{name:'ok'}, size: [120,24], alignment:['right', 'center'] },
        }
    }`;
    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    // *********************************************

    constructor() {
        this.w = new Window(this.windowResource) as MyPalette;

        this.w.bottomGroup.cancelButton.onClick = () => {
            this.close();
        };
        this.w.bottomGroup.applyButton.onClick = () => {
            this.close();
        };
        this.w.sliderPanel.slider.onChange = () => {
            this.w.sliderPanel.edittext.text = Math.floor(this.w.sliderPanel.slider.value).toString();
        }
        this.w.sliderPanel.edittext.onChanging = () => {
            this.w.sliderPanel.slider.value = parseInt(this.w.sliderPanel.edittext.text, 10);
        }
    }

    show = () => {
        this.w.show();
        this.isShow = true;
    }

    close = () => {
        this.w.close();
        this.isShow = false;
    }
}