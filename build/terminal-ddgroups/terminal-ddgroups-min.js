YUI.add("terminal-ddgroups",function(e,t){e.TerminalDDGroups=function(t){e.after(this._renderUIgroups,this,"renderUI"),e.after(this._showOverlayDDGroups,this,"_showOverlay")},e.TerminalDDGroups.ATTRS={showGroups:{value:!0}},e.TerminalDDGroups.prototype={_renderUIgroups:function(){this.get("editable")&&this._renderTooltip()},_renderTooltip:function(){this.get("showGroups")&&(this._ddGroupsOverlay=new e.Overlay({render:this.get("boundingBox"),bodyContent:this.get("ddGroupsDrag").join(",")}),this._ddGroupsOverlay.get("contentBox").addClass(this.getClassName("dd-groups")))},_showOverlayDDGroups:function(){this._ddGroupsOverlay.align(this.get("contentBox"),[e.WidgetPositionAlign.TC,e.WidgetPositionAlign.BC])}}},"@VERSION@",{requires:["terminal-dragedit"]});