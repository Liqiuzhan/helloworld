if (!window.lib) { window.lib = {}; }

var p; // shortcut to reference prototypes

// stage content:
(lib.pinyin_a_scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_94 = function() {
		playSound("a_4tones",0);
	}
	this.frame_249 = function() {
		
		this.stop();
		
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).wait(94).call(this.frame_94).wait(155).call(this.frame_249).wait(1));

	// Layer 1
	this.instance = new lib.letter_a_jpg();
	this.instance.setTransform(403.1,285.1);
	this.instance.shadow = new Shadow("#ffff00",0,0,5);

	this.timeline.addTween(Tween.get(this.instance).wait(100).to({_off:true},121).wait(29));

	// tone1
	this.instance_1 = new lib.tone1("synched",0);
	this.instance_1.setTransform(201.9,80);
	this.instance_1._off = true;

	this.timeline.addTween(Tween.get(this.instance_1).wait(130).to({_off:false},0).wait(120));

	// 1st
	this.letter_a_red1 = new lib.letter_a_red();
	this.letter_a_red1.setTransform(403.1,285.1);
	this.letter_a_red1.shadow = new Shadow("#ffff00",0,0,0);
	this.letter_a_red1._off = true;

	this.timeline.addTween(Tween.get(this.letter_a_red1).wait(100).to({_off:false},0).to({scaleX:0.71,scaleY:0.71,x:200,y:174.1},30).wait(120));

	// tone2
	this.instance_2 = new lib.tone2("synched",0);
	this.instance_2.setTransform(595.9,66.5);
	this.instance_2._off = true;

	this.timeline.addTween(Tween.get(this.instance_2).wait(160).to({_off:false},0).wait(90));

	// 2nd
	this.letter_a_yellow1 = new lib.letter_a_yellow();
	this.letter_a_yellow1.setTransform(403.9,285.9);
	this.letter_a_yellow1.shadow = new Shadow("#ffff00",0,0,0);
	this.letter_a_yellow1._off = true;

	this.timeline.addTween(Tween.get(this.letter_a_yellow1).wait(130).to({_off:false},0).to({scaleX:0.7,scaleY:0.7,x:600,y:169.6},30).wait(90));

	// tone3
	this.instance_3 = new lib.tone3("synched",0);
	this.instance_3.setTransform(207,318.5);
	this.instance_3._off = true;

	this.timeline.addTween(Tween.get(this.instance_3).wait(190).to({_off:false},0).wait(60));

	// 3rd
	this.letter_a_green1 = new lib.letter_a_green();
	this.letter_a_green1.setTransform(401.9,283.9);
	this.letter_a_green1.shadow = new Shadow("#ffff00",0,0,0);
	this.letter_a_green1._off = true;

	this.timeline.addTween(Tween.get(this.letter_a_green1).wait(160).to({_off:false},0).to({scaleX:0.7,scaleY:0.7,x:200,y:410},30).wait(60));

	// tone4
	this.instance_4 = new lib.tone4("synched",0);
	this.instance_4.setTransform(599.5,310);
	this.instance_4._off = true;

	this.timeline.addTween(Tween.get(this.instance_4).wait(220).to({_off:false},0).wait(30));

	// 4th
	this.letter_a_blue1 = new lib.letter_a_blue();
	this.letter_a_blue1.setTransform(403,286,0.999,0.998);
	this.letter_a_blue1.shadow = new Shadow("#ffff00",0,0,0);
	this.letter_a_blue1._off = true;

	this.timeline.addTween(Tween.get(this.letter_a_blue1).wait(190).to({_off:false},0).to({scaleX:0.7,scaleY:0.7,x:600,y:410},30).wait(30));

	// sikworm
	this.silkworm_beach = new lib.silkworm_beach();
	this.silkworm_beach.setTransform(104.4,516.8);
	this.silkworm_beach.shadow = new Shadow("#ffff00",0,0,0);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.silkworm_beach}]}).wait(250));

	// button
	this.instance_5 = new lib.nextscene("synched",0);
	this.instance_5.setTransform(713,566.3,0.672,0.673);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance_5}]}).wait(250));

	// bg
	this.shape = new Shape();
	this.shape.graphics.f("#996600").p("EgBJgpEMAAABSKICShtMAAAhO0IiShp").f().s("#990000").ss(3,1,1,3).p("EgBJgpEICSBpMAAABO0IiSBtMAAAhSK").cp();
	this.shape.setTransform(400,524.8,1,1.521,-89.9);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#996600").p("EgBKgpEMAAABSKICThtMAAAhO0IiThp").f().s("#990000").ss(3,1,1,3).p("EgBKgpEICTBpMAAABO0IiTBtMAAAhSK").cp();
	this.shape_1.setTransform(400,7.4,1,1.521,0,-89.9,90);

	this.shape_2 = new Shape();
	this.shape_2.graphics.f("#996600").p("EgBMgpEMAAABSKICYiZMAAAhNvIiYiC").f().s("#990000").ss(3,1,1,3).p("EgBMgpEICYCCMAAABNvIiYCZMAAAhSK").cp();
	this.shape_2.setTransform(792.3,266.9,1,1.007,0,0,180);

	this.shape_3 = new Shape();
	this.shape_3.graphics.f("#996600").p("EgBMgpEMAAABSKICYiZMAAAhNvIiYiC").f().s("#990000").ss(3,1,1,3).p("EgBMgpEICYCCMAAABNvIiYCZMAAAhSK").cp();
	this.shape_3.setTransform(7.7,266.9,1,1.007);

	this.shape_4 = new Shape();
	this.shape_4.graphics.f("#000000").p("EA+ggpXMh8/AAAMAAABSwMB8/AAAMAAAhSw").f();
	this.shape_4.setTransform(400,264.9);

	this.shape_5 = new Shape();
	this.shape_5.graphics.f("#99ffcc").p("EBG9hG+MiN6AAAMAAACN6MCN6AAAMAAAiN6").f();
	this.shape_5.setTransform(400,564.9,0.881,0.077);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(250));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(0,0,800,600.1);


// symbols:



(lib.letter_a_jpg = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ff0000","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff","#ff0000"],[0,0.165,0.365,0.498,0.667,0.831,1],-70.4,0,70.5,0).p("AGYrqQiehCiAAAQlSAAjzD8Qj1D8AAFiQAAF3CUC1QCdDCFXAAQBHAABrgmQBrgoCNhMQAgAvBCA8QBJBAAcAAQA2AAApgmQApgmAAg6IgJgZQgXg0gKgaQhOjBgPhBQgahpABi2QACjHAJh/QAHh/APg4QAdgfAAgnQAAh0jHhS").p("ADMocQAmAOA2AbQgQBUgHBLQgJBJAAA/QAADBAvGEQhfBTg1AcQhiA0iMAAQiqAAhVh5QhVh4AAjwQAAjxCmi5QCki6DiAAQAYAAAnAN").f();

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-70.4,-81.2,141,162.6);


(lib.tone1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f().s("#ff0000").ss(20,1,1,3).p("ApDAAISHAA");
	this.shape.setTransform(0,0,0.776,1);

	this.addChild(this.shape);
}).prototype = p = new Container();


(lib.letter_a_red = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#ff0000").p("AGYrqQiehCiAAAQlSAAjzD8Qj1D8AAFiQAAF3CUC1QCdDCFXAAQBHAABrgmQBrgoCNhMQAgAvBCA8QBJBAAcAAQA2AAApgmQApgmAAg6IgJgZQgXg0gKgaQhOjBgPhBQgahpABi2QACjHAJh/QAHh/APg4QAdgfAAgnQAAh0jHhS").p("ADMocQAmAOA2AbQgQBUgHBLQgJBJAAA/QAADBAvGEQhfBTg1AcQhiA0iMAAQiqAAhVh5QhVh4AAjwQAAjxCmi5QCki6DiAAQAYAAAnAN").f();

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-70.4,-81.2,141,162.6);


(lib.tone2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f().s("#ffff00").ss(20,1,1,3).p("AnlEAIPMn+");
	this.shape.setTransform(0,0,0.791,1);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-38.4,-25.4,77,51.1);


(lib.letter_a_yellow = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#ffff00").p("AGYrqQiehCiAAAQlSAAjzD8Qj1D8AAFiQAAF3CUC1QCdDCFXAAQBHAABrgmQBrgoCNhMQAgAvBCA8QBJBAAcAAQA2AAApgmQApgmAAg6IgJgZQgXg0gKgaQhOjBgPhBQgahpABi2QACjHAJh/QAHh/APg4QAdgfAAgnQAAh0jHhS").p("ADMocQAmAOA2AbQgQBUgHBLQgJBJAAA/QAADBAvGEQhfBTg1AcQhiA0iMAAQiqAAhVh5QhVh4AAjwQAAjxCmi5QCki6DiAAQAYAAAnAN").f();

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-70.4,-81.2,141,162.6);


(lib.tone3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f().s("#00ff00").ss(20,1,1,3).p("Aj9CmIH9lJ");
	this.shape.setTransform(22.5,0);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f().s("#00ff00").ss(20,1,1,3).p("AjfijIHBFJ");
	this.shape_1.setTransform(-25.4,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-47.9,-16.4,96,33);


(lib.letter_a_green = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#00ff00").p("AGYrqQiehCiAAAQlSAAjzD8Qj1D8AAFiQAAF3CUC1QCdDCFXAAQBHAABrgmQBrgoCNhMQAgAvBCA8QBJBAAcAAQA2AAApgmQApgmAAg6IgJgZQgXg0gKgaQhOjBgPhBQgahpABi2QACjHAJh/QAHh/APg4QAdgfAAgnQAAh0jHhS").p("ADMocQAmAOA2AbQgQBUgHBLQgJBJAAA/QAADBAvGEQhfBTg1AcQhiA0iMAAQiqAAhVh5QhVh4AAjwQAAjxCmi5QCki6DiAAQAYAAAnAN").f();

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-70.4,-81.2,141,162.6);


(lib.tone4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f().s("#0066ff").ss(20,1,1,3).p("Al1j4ILtHz");

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-37.4,-24.9,75,50);


(lib.letter_a_blue = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#0066ff").p("AGYrqQiehCiAAAQlSAAjzD8Qj1D8AAFiQAAF3CUC1QCdDCFXAAQBHAABrgmQBrgoCNhMQAgAvBCA8QBJBAAcAAQA2AAApgmQApgmAAg6IgJgZQgXg0gKgaQhOjBgPhBQgahpABi2QACjHAJh/QAHh/APg4QAdgfAAgnQAAh0jHhS").p("ADMocQAmAOA2AbQgQBUgHBLQgJBJAAA/QAADBAvGEQhfBTg1AcQhiA0iMAAQiqAAhVh5QhVh4AAjwQAAjxCmi5QCki6DiAAQAYAAAnAN").f();

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-70.4,-81.2,141,162.6);


(lib.silkworm_beach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		
		this.stop();
	}
	this.frame_12 = function() {
		playSound("vowel_a",0);
	}
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).wait(0).call(this.frame_0).wait(12).call(this.frame_12).wait(67).call(this.frame_79).wait(1));

	// text
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("Ag/hTQgjAmAAA0QAAA4AVAcQAWAdAwAAQAKAAAPgGQAPgGAUgLQAEAHAJAJQALAJADAAQAIAAAGgFQAGgHAAgIIgBgEQgEgHgBgEQgLgdgDgKQgDgQAAgbQABgdABgTQABgTACgJQADgEAAgHQAAgQgbgNQgWgKgSAAQgvAAgiAm").p("AAUhSQAEAAAFACQAGACAHAEQgCAMgBAMQgBALAAAKQAAAdAGA5QgNAMgIAEQgNAIgTAAQgYAAgMgSQgMgSAAgkQAAgkAXgbQAXgcAfAA").f();
	this.shape.setTransform(57.3,53.1);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.shape}]}).wait(80));

	// textmask
	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#ff6600").p("ADJj/ImRAAIAAH/IGRAAIAAn/").f();
	this.shape_1.setTransform(56,49.5);

	this.timeline.addTween(Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},19).wait(61));

	// textbg
	this.shape_2 = new Shape();
	this.shape_2.graphics.f("#99ff00").p("ANbj/I62AAIAAH/Ia2AAIAAn/").f().s("#000000").ss(1,1,1,3).p("ANbj/IAAH/I62AAIAAn/Ia2AA").cp();
	this.shape_2.setTransform(57,49.5,0.288,1.094);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.shape_2}]}).wait(80));

	// silkworm
	this.instance = new lib.silkworm_read();
	this.instance.setTransform(-36.8,0.8,1,1,0,0,0,-56.8,-22.5);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance}]}).wait(80));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-102.4,-81.2,184.3,164.5);


(lib.silkworm_read = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// book
	this.instance = new lib.silkwormbook();
	this.instance.setTransform(-56.9,-1.4);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance}]}).wait(60));

	// readingmouth
	this.instance_1 = new lib.silkwork_readingmouth();
	this.instance_1.setTransform(-76.8,-50.9);

	this.timeline.addTween(Tween.get(this.instance_1).to({x:-35.7},29).to({x:-76.7},30).wait(1));

	// head
	this.instance_2 = new lib.silewormheadnomouse2("synched",0);
	this.instance_2.setTransform(-76.5,-70.1);

	this.timeline.addTween(Tween.get(this.instance_2).to({x:-35.4,startPosition:29},29).to({x:-77.4,startPosition:59},30).wait(1));

	// Layer 13
	this.instance_3 = new lib.silkwormbody3("synched",0);
	this.instance_3.setTransform(-75.6,-32.1);

	this.timeline.addTween(Tween.get(this.instance_3).to({x:-32.5,startPosition:29},29).to({x:-75.5,startPosition:0},30).wait(1));

	// Layer 12
	this.instance_4 = new lib.silkwormbody3("synched",0);
	this.instance_4.setTransform(-75.6,-19.6);

	this.timeline.addTween(Tween.get(this.instance_4).to({x:-35.5,startPosition:29},29).to({x:-75.5,startPosition:0},30).wait(1));

	// Layer 11
	this.instance_5 = new lib.silkwormbody3("synched",0);
	this.instance_5.setTransform(-68.1,-9.1);

	this.timeline.addTween(Tween.get(this.instance_5).to({x:-37.5,y:-7.5,startPosition:29},29).to({x:-68,y:-9,startPosition:0},30).wait(1));

	// Layer 10
	this.instance_6 = new lib.silkwormbody3("synched",0);
	this.instance_6.setTransform(-56.6,0.4);

	this.timeline.addTween(Tween.get(this.instance_6).to({x:-36,y:3.4,startPosition:29},29).to({x:-56.5,y:0.4,startPosition:0},30).wait(1));

	// Layer 9
	this.instance_7 = new lib.silkwormbody3("synched",0);
	this.instance_7.setTransform(-47.1,9.9);

	this.timeline.addTween(Tween.get(this.instance_7).to({x:-30.5,y:15.4,startPosition:29},29).to({x:-47,y:9.9,startPosition:0},30).wait(1));

	// Layer 8
	this.instance_8 = new lib.silkwormbody3("synched",0);
	this.instance_8.setTransform(-42.1,17.9);

	this.timeline.addTween(Tween.get(this.instance_8).to({x:-24.5,y:23.4,startPosition:29},29).to({x:-42,y:17.9,startPosition:0},30).wait(1));

	// Layer 7
	this.instance_9 = new lib.silkwormbody3("synched",0);
	this.instance_9.setTransform(-36.6,29.9);

	this.timeline.addTween(Tween.get(this.instance_9).to({x:-21,y:33.9,startPosition:29},29).to({x:-36.5,y:29.9,startPosition:0},30).wait(1));

	// Layer 6
	this.instance_10 = new lib.silkwormbody3("synched",0);
	this.instance_10.setTransform(-29.1,40.4);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance_10}]}).wait(60));

	// Layer 5
	this.instance_11 = new lib.silkwormbody3("synched",0);
	this.instance_11.setTransform(-36.6,47.4);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance_11}]}).wait(60));

	// Layer 4
	this.instance_12 = new lib.silkwormbody3("synched",0);
	this.instance_12.setTransform(-53.6,47.4);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance_12}]}).wait(60));

	// Layer 3
	this.instance_13 = new lib.silkwormbody3("synched",0);
	this.instance_13.setTransform(-66.5,44.4);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance_13}]}).wait(60));

	// Layer 2
	this.instance_14 = new lib.silkwormbody2("synched",0);
	this.instance_14.setTransform(-79.9,40);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance_14}]}).wait(60));

	// Layer 1
	this.instance_15 = new lib.silkwormbody1("synched",0);
	this.instance_15.setTransform(-91.9,35);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance_15}]}).wait(60));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-122.4,-104.6,131,164.5);


(lib.silkwormbook = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// book
	this.shape = new Shape();
	this.shape.graphics.lf(["#663333","#160c0c"],[0,1],65.5,7,4.5,7).p("AKBkYIosF8IgoFKIFoiqID6olIgOAJ").f("#ffffff").p("AJJl2Qk+CSkGElQjektl1jQIgnCsIIhF0QBwBnA5hnIIsl8Ig4he").lf(["#663333","#160c0c"],[0,1],-65.4,7,-4.4,7).p("AqOkhID6IlIFoCqIgolKIohl0IgZgR").f("#663300").p("AgsGuQAsAeAtgeIAolKQg5BnhwhnIAoFK").f().s("#000000").ss(2,1,1,3).p("AKBkYIAOgJIj6IlIloCqQgtAegsgeIloiqIj6olIAZARIAnisQF1DQDeEtQEGklE+iSIA4Be").cp().p("AKBkYIosF8IgoFK").p("Ap1kQIIhF0QBwBnA5hn").p("AgsGuIgolK");

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.shape}]}).wait(54));

	// page
	this.instance = new lib.page();
	this.instance.setTransform(-27.3,-12.4);
	this.instance._off = true;

	this.timeline.addTween(Tween.get(this.instance).wait(39).to({_off:false},0).to({scaleX:0.14,skewY:180,x:7.5,y:-16.4},7).to({scaleX:1.06,x:30.6,y:-12.9},7).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-65.4,-44.4,131,89);


(lib.page = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#ffffff").p("AEiEKQjUlQlvkcIDmIlIFdCgIAAhZ").f().s("#000000").ss(2,1,1,3).p("AEiEKIAABZIldigIjmolQFvEcDUFQ").cp();
	this.shape.setTransform(-0.5,-5.9);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-29.4,-41.4,58,71);


(lib.silkwork_readingmouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// mouse
	this.shape = new Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1,3).p("AhagSQBbBKBbhK");
	this.shape.setTransform(1.8,1.9);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1,3).p("AhaAAIC2AA");
	this.shape_1.setTransform(1.8,0);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).wait(1));

	// cheek
	this.instance = new lib.rightcheek("synched",0);
	this.instance.setTransform(13.3,-1.3,1,1,0,0,0,2.5,1.6);

	this.instance_1 = new lib.leftcheek("synched",0);
	this.instance_1.setTransform(-11.7,0);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(10));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-15,-6.7,30.3,12.8);


(lib.rightcheek = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1,3).p("AA7A0QjeghDPhH");
	this.shape.setTransform(2.5,1.6,0.327,1);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0.6,-3.6,3.8,10.5);


(lib.leftcheek = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1,3).p("AghA8QAvgbAOgW").p("AAcABQAbgohYgU");

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-3.3,-5.9,6.8,12);


(lib.silewormheadnomouse2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.silkwormeye_left("synched",0);
	this.instance.setTransform(-6.8,-13.5,1,1,0,0,0,-3.6,-7.6);

	this.instance_1 = new lib.silkwormeye_right("synched",0);
	this.instance_1.setTransform(9,-14.5,1,1,0,0,0,7.8,-8.7);

	this.instance_2 = new lib.silkworm_head_no_mouth("synched",0);
	this.instance_2.setTransform(0,14.5,1,1,0,0,0,0,1.7);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-23.4,-34.4,47,69);


(lib.silkwormeye_left = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1,3).p("Ag8AsQAFibByBz");
	this.shape.setTransform(-5.2,-21.9);

	this.instance = new lib.silkworm_righteye("synched",0);
	this.instance.setTransform(-3.7,-0.4);

	this.addChild(this.instance,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-12.2,-26.4,17,38);


(lib.silkworm_righteye = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#330000").p("AAaAAQAAgKgIgIQgHgHgKAAQgKAAgIAHQgGAIAAAKQAAAKAGAHQAIAHAKAAQAKAAAHgHQAIgHAAgK").f().s("#330000").ss(2,1,1,3).p("AAaAAQAAAKgIAHQgHAHgKAAQgKAAgIgHQgGgHAAgKQAAgKAGgIQAIgHAKAAQAKAAAHAHQAIAIAAAK").cp();
	this.shape.setTransform(2.2,1.3,2,2);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#ffffff").p("AAAh4QgjAAgZAjQgZAkAAAxQAAAxAZAjQAZAjAjAAQAiAAAZgjQAZgjAAgxQAAgxgZgkQgZgjgiAA").f().s("#000000").ss(2,1,1,3).p("AAAh4QAiAAAZAjQAZAkAAAxQAAAxgZAjQgZAjgiAAQgjAAgZgjQgZgjAAgxQAAgxAZgkQAZgjAjAA").cp();

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-8.4,-11.9,17,24);


(lib.silkwormeye_right = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1,3).p("Ag4AJQBNiKAmCz");
	this.shape.setTransform(8.5,-23.4);

	this.instance = new lib.silkworm_righteye("synched",0);
	this.instance.setTransform(7.8,-0.4);

	this.addChild(this.instance,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-0.7,-28.5,17,40.1);


(lib.silkworm_head_no_mouth = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#ffcb65").p("AAMDHQB7ABA2hIQA2hHgJhCQgJhCgTgWQgSgWgfgXQhUg5hGAAQhvAAhFBMQhFBNAQBCQAQBEA0A3QA0A4B6AA").f().s("#000000").ss(2,1,1,3).p("AAMDHQh6AAg0g4Qg0g3gQhEQgQhCBFhNQBFhMBvAAQBGAABUA5QAfAXASAWQATAWAJBCQAJBCg2BHQg2BIh7gB").cp();
	this.shape.setTransform(0,1.7);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-23.4,-18.2,47,40);


(lib.silkwormbody3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("AAjAAQAAgOgLgLQgKgKgOAAQgOAAgKAKQgKALAAAOQAAAOAKAKQAKAKAOAAQAOAAAKgKQALgKAAgO").f().s("#000000").ss(2,1,1,3).p("AAjAAQAAAOgLAKQgKAKgOAAQgOAAgKgKQgKgKAAgOQAAgOAKgLQAKgKAOAAQAOAAAKAKQALALAAAO").cp();
	this.shape.setTransform(-3.4,-6.4,0.429,0.429);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#ffcb65").p("AAAh8Qg0AAgkAkQgkAlAAAzQAAA1AkAkQAkAkA0AAQA0AAAkgkQAlgkAAg1QAAgzglglQgkgkg0AA").f().s("#000000").ss(2,1,1,3).p("AAAh8QA0AAAkAkQAlAlAAAzQAAA1glAkQgkAkg0AAQg0AAgkgkQgkgkAAg1QAAgzAkglQAkgkA0AA").cp();

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-12.4,-12.4,25,25);


(lib.silkwormbody2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("AAjAAQAAgOgLgLQgKgKgOAAQgOAAgKAKQgKALAAAOQAAAOAKAKQAKAKAOAAQAOAAAKgKQALgKAAgO").f().s("#000000").ss(2,1,1,3).p("AAjAAQAAAOgLAKQgKAKgOAAQgOAAgKgKQgKgKAAgOQAAgOAKgLQAKgKAOAAQAOAAAKAKQALALAAAO").cp();
	this.shape.setTransform(-1.8,-4.9,0.429,0.429);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#ffcc66").p("AA/BAQAagaAAgmQAAgkgagbQgagaglAAQglAAgbAaQgaAbAAAkQAAAmAaAaQAbAbAlAAQAlAAAagb").f().s("#000000").ss(2,1,1,3).p("AA/BAQgaAbglAAQglAAgbgbQgagaAAgmQAAgkAagbQAbgaAlAAQAlAAAaAaQAaAbAAAkQAAAmgaAa").cp();
	this.shape_1.setTransform(0,0,1.25,1.25);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-11.2,-11.2,22.5,22.5);


(lib.silkwormbody1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("AAiAAQAAgOgKgKQgKgKgOAAQgOAAgLAKQgKAKAAAOQAAAOAKAKQALALAOAAQAOAAAKgLQAKgKAAgO").f().s("#000000").ss(2,1,1,3).p("AAiAAQAAAOgKAKQgKALgOAAQgOAAgLgLQgKgKAAgOQAAgOAKgKQALgKAOAAQAOAAAKAKQAKAKAAAO").cp();
	this.shape.setTransform(-1.3,-2.4,0.429,0.429);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#ffcc66").p("AA/BAQAagaAAgmQAAgkgagbQgagaglAAQglAAgbAaQgaAbAAAkQAAAmAaAaQAbAbAlAAQAlAAAagb").f().s("#000000").ss(2,1,1,3).p("AA/BAQgaAbglAAQglAAgbgbQgagaAAgmQAAgkAagbQAbgaAlAAQAlAAAaAaQAaAbAAAkQAAAmgaAa").cp();

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-8.9,-8.9,18,18);


(lib.nextscene = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#330000").p("ACvAAIlejKIAAGUIFejK").f();
	this.shape.setTransform(5.4,0.2);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("rgba(214,214,214,0.498)").p("AEihaQgwgMg+gJQiagWifBQQihBPAiBDQAhBFBlhXQBkhVCRg2QBXggBUAG").f();
	this.shape_1.setTransform(-42.4,-10.6,0.6,0.6,-29.9);

	this.shape_2 = new Shape();
	this.shape_2.graphics.rf(["#ff9900","#ff6600","#ff6600","#981f01","#ff3300","#fe8e45"],[0,0,0.741,0.941,1,1],-0.9,-1.4,0,-0.9,-1.4,59.9).p("AABpRQj2AAivCuQiuCuAAD2QAAD3CuCuQCvCuD2AAQD2AACuiuQCviuAAj3QAAj2iviuQiuiuj2AA").f();
	this.shape_2.setTransform(0,0,1,0.588);

	this.shape_3 = new Shape();
	this.shape_3.graphics.f("#ff3300").p("AGlj3Qiuhnj2AAQj2AAivBnQiuBmAACRQAACQCuBnQCvBmD2AAQD2AACuhmQCvhnAAiQQAAiRivhm").f();

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-59.4,-34.9,119,70);