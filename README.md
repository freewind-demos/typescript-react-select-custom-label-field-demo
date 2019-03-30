TypeScript React Select Custom Label Field Demo
=================================

使用一组对象当Option，选择对象的某一个field作为label，非常完美。

注意：
1. 使用`getOptionLabel`而不是`formatOptionLabel`，如果使用后者，虽然可以显示，但是不能输入时提示
2. `getOptionValue`也需要提供，否则选择某个option后，再点开列表，会发现所有的选项都被选中了

```
npm install
npm run demo
```
