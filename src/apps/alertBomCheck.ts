////////////////////////////////////////////////////////////////
///
///	
///	
///											
///
////////////////////////////////////////////////////////////////
// @script "Alert Bom Check"
// @strict on
// @target "photoshop"
// @targetengine "test"
import "extendscript-es5-shim-ts"

import alertTest from '../components/alert'

alertTest(`このアプリは${app.name}です` + "\n文字化けの確認 : A" + '\n文字化けの確認 : B');