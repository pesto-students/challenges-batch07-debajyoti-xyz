import LinkListNode from './linkListNode';
import LinkList from './linkList';

describe('LinkListNode', () => {
  test('should create list node with value', () => {
    const node = new LinkListNode('satyam');
    expect(node.value).toBe('satyam');
    expect(node.next).toBeNull();
  });

  test('should link node together', () => {
    const node1 = new LinkListNode('satyam');
    const node2 = new LinkListNode('sidhartha', node1);

    expect(node1.next).toBeNull();
    expect(node1.value).toBe('satyam');
    expect(node2.next).toBeDefined();
    expect(node2.next.value).toBe('satyam');
  });

  test('should convert node to string', () => {
    const node = new LinkListNode(22);

    expect(node.toString()).toBe('22');
  });

  test('should convert node to string with custom stringifier', () => {
    const node = new LinkListNode({ key: 'name', value: 'satyam' });
    const dataFormatter = (data) => `key: ${data.key}, value: ${data.value}`;

    expect(node.toString(dataFormatter)).toBe('key: name, value: satyam');
  });
});

describe('LinkList', () => {
  let list = null;
  beforeEach(() => {
    list = new LinkList();
  });
  test('should prepend value', () => {
    list.prepend('Satyam');
    list.prepend('sidhartha');

    expect(list.length()).toBe(2);
    expect(list.head).not.toBeNull();
    expect(list.head.value).toBe('sidhartha');
  });

  test('should append value', () => {
    list.append('Satyam');
    list.append('sidhartha');
    list.append('Rahul');
    expect(list.length()).toBe(3);
    expect(list.head).not.toBeNull();
    expect(list.head.value).toBe('Satyam');
  });

  test('should delete value', () => {
    list.append('Satyam');
    list.append('sidhartha');
    list.delete('sidhartha');
    expect(list.length()).toBe(1);
    expect(list.contains('sidhartha')).toBeFalsy();
  });

  test('should traverse values', () => {
    list.append('Satyam');
    list.append('sidhartha');
    list.traverse();
    expect(list.length()).toBe(2);
  });
  test('should invoke cb for all values while traversing', () => {
    list.append('mango');
    list.append('lichi');
    list.append('grapes');
    list.append('jackfruit');
    list.append('oragne');
    list.append('apple');
    const cb = jest.fn();
    list.traverse(cb);
    expect(cb).toHaveBeenCalledTimes(6);
    expect(cb.mock.calls).toEqual([
      ['mango'],
      ['lichi'],
      ['grapes'],
      ['jackfruit'],
      ['oragne'],
      ['apple'],
    ]);
  });

  test('should contain value', () => {
    list.append('Satyam');
    list.append('sidhartha');
    list.append('Rahul');
    expect(list.contains('Rahul')).toBeTruthy();
  });
});
