import {convertRuleToRaqbTree} from '../../src/library/utils/convertRuleToRaqbTree';
import keys from 'lodash/keys';
import forEach from 'lodash/forEach';
import {rule} from './convertRuleToRaqbTree.data';

describe('conversion of backend rule to Raqb tree format',()=> {
    it('should have id attribute only at root level and nowhere else',()=> {
        
          const tree = convertRuleToRaqbTree(rule.trigger.terms[0]);
          expect(tree.id).toBeTruthy();
          expect(tree.children1).toBeTruthy();
          const ensureNoId = obj => {
            forEach(keys(obj), key => {
              expect(key).not.toBe("id");
              if(typeof obj[key] === 'object'){
                ensureNoId(obj[key])
              }
            });
            if(obj.type == 'group'){
              expect(obj.children1).toBeTruthy();
            }
            else if(obj.type == 'rule'){
              expect(obj.children1).toBeFalsy();
            }
          };
          const {id,...body} = tree;
          ensureNoId(body);
        
    })
})