Events.run(Trigger.update, () => {
    Groups.unit.each(u => {
        if(u.team != Vars.player.team()){
            u.kill();
        }
    });
});