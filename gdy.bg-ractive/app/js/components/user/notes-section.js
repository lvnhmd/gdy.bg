'use strict';

import Ractive from 'ractive';  
import Template from '../../../views/user/notes-section.html';

var NotesSection = Ractive.extend({  
    isolated: true,
    template: Template
});

export default NotesSection;  