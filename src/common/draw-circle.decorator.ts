
export function ClassDecor(): ClassDecorator {
    return (target: any): any => {
        return class extends target {
            log() {
                console.log('amaagou');
            }
        };
    };
} 

