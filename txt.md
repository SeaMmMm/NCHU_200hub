### React Native 是一种流行的 Javascript 框架，它构建在 React 之上，通过使用原生组件创建一个与使用 Xcode 或 Android Studio 制作的真正的移动应用程序没有区别。与原生开发的主要区别在于，您可以使用 CSS、热重载、Javascript 和其他 Web 在过去几十年中发展起来的熟悉技术。最重要的是，您正在使用相同的代码库为 iOS 和 Android 构建。

## 下载

要学习本课程，您可以下载[源文件](https://assets.ctfassets.net/ooa29xqb8tix/5jpIVZzlaPO7Zjz3qr7kMY/1c3f07240365ef7cc185f57af99ecc24/Assets_-_React_Native_Part_1-2_.zip)，这将帮助您比较您的进度。

## 关于本课程

这是一门由设计师为设计师开设的课程，重点关注 UI、动画和从设计工具开始的工作流程。代码和速度很容易理解。每一步都是可视的，可以轻松遵循。您可以在没有任何编程经验的情况下参加本课程，但是拥有一些 CSS 和 HTML 知识肯定会帮助您了解一些概念的复杂性。[InVision Studio](https://www.invisionapp.com/studio) （免费）中的[设计文件](https://www.dropbox.com/s/4av17693kc1gxj7/DesignCode-ReactNative.zip?dl=0)、项目资产和 [React Native源代码](https://github.com/MengTo/react-native-for-designers)是共享的，以便您可以与自己的进度进行比较。

## 两部分课程

第一部分包含 12 个部分，然后是[第 2部分](https://nchu200hub.netlify.app/react-native-2)中的另外 12 个部分。这是一门包含超过 10 小时学习材料和额外屏幕和修复的奖励代码的[大型课程](https://github.com/MengTo/react-native-for-designers)。

## 为什么要学习 React Native？

React Native 被广泛认为是创建跨平台应用程序的最佳方式。如果您参加了我的[React 课程](https://nchu200hub.netlify.app/advanced_react)，您会感到宾至如归，因为代码非常相似。今天，大多数设计师都知道用于 Web 的 HTML 和 CSS。我坚信他们应该掌握同等的移动技能。拥有应用程序的视觉方面、动画和适应性可以为您的团队节省大量时间，避免不必要的沟通或做出糟糕的设计决策。反过来，它增加了设计师和开发人员之间的协作。最终，您的产品将以更高的质量和更好的迭代速度交付。

## 工作流程

我们将使用[Expo](http://expo.io/)来设置我们的开发环境，以便在 iOS 和 Android 模拟器以及您的物理设备上轻松测试我们的应用程序。对于样式，我们将使用样式化组件，因为它与 CSS 中的语法相似。图标资源将在[SVG](https://github.com/react-native-community/react-native-svg)中基于矢量。对于内容和 CMS（内容管理系统），我们将使用[Contentful](https://www.contentful.com/)和[Apollo](https://www.apollographql.com/) /GraphQL，它允许您独立存储图像和文本并像数据库一样查询它们。像这样，当您更新内容时，您不需要发送应用更新。

我们将使用[Redux](https://redux.js.org/basics/usage-with-react)在组件之间进行通信，以便一个操作可以同时影响多个组件。这对于持久状态和数据特别有用。除此之外，我们将尽可能多地使用 React Native/Expo 工具箱中的内置库，例如[Animated](https://facebook.github.io/react-native/docs/animations)、[Gestures](https://facebook.github.io/react-native/docs/panresponder)、[Icons](https://docs.expo.io/versions/latest/guides/icons/)和[Navigation](https://facebook.github.io/react-native/docs/navigation)。

## 安装节点

在开始之前，您需要 Node 包管理器 (NPM) 来安装 React 和 Expo。要安装 Node，您需要前往他们的站点并[下载](https://nodejs.org/en/)适合您系统的版本。如果您愿意，也可以使用[Homebrew](https://brew.sh/)（仅限 Mac）安装节点。

![https://images.ctfassets.net/ooa29xqb8tix/4vhRzlhODzzzW8Vipm5OIz/8d697848f3fb14e70c4f8994a36bad92/installNode.png](https://images.ctfassets.net/ooa29xqb8tix/4vhRzlhODzzzW8Vipm5OIz/8d697848f3fb14e70c4f8994a36bad92/installNode.png)

## 安装 Xcode

如果您使用的是 Mac，我强烈建议您为所需的命令行工具和使用 iOS 模拟器[安装 Xcode](https://itunes.apple.com/ca/app/xcode/id497799835?mt=12) 。Xcode 还附带了[Git](https://git-scm.com/)，非常适合开发。

![https://images.ctfassets.net/ooa29xqb8tix/7LcWh5p1zq6Pdut3eVNVzr/889fb37e3774d7fb64b2b484115af014/installXcode.png](https://images.ctfassets.net/ooa29xqb8tix/7LcWh5p1zq6Pdut3eVNVzr/889fb37e3774d7fb64b2b484115af014/installXcode.png)

在 Xcode 中，确保转到 Xcode、首选项、位置并查看命令行工具是否已正确安装。

![https://images.ctfassets.net/ooa29xqb8tix/5CimKErSUBlugL5FMVnwbn/3af88341cea1f5a0b49a5508cce6f650/installXcode2.png](https://images.ctfassets.net/ooa29xqb8tix/5CimKErSUBlugL5FMVnwbn/3af88341cea1f5a0b49a5508cce6f650/installXcode2.png)

## 终端

要安装几乎任何库，例如 Git 或 React，您需要使用终端。它本质上是一个您可以编写命令来为您运行程序的地方，例如安装新框架或更新您的库。要打开终端，请运行 Spotlight ( **Command + Space** ) 并键入 Terminal。到达那里后，转到“下载”文件夹。您可以按Tab自动完成Downloads。

```md
cd Downloads
```

随意将您的项目放在桌面或文档中。我选择下载的原因是因为 iCloud 不会干扰热重载。

## 安装Expo

Expo将允许我们拥有一个开发环境来创建我们的应用程序。转到终端并键入此命令，然后按 Enter。

```md
sudo npm install expo-cli --global
```

转到他们的[快速入门指南](https://expo.io/learn)以获取更详细的说明。

- 1. sudo 允许您安装需要管理员权限的库。确保您的 Mac 帐户设置为管理员。
- 2. 全局意味着您可以从终端中的任何文件夹运行expo命令。

## 创建项目

通过运行此命令开始构建您的第一个 React Native 项目。

```js
expo init designcode-app
```

- 1. 选择空白模板。
- 2. 选择托管（默认）。
- 3. 将名称设置为“设计+代码”。或者，随意使用您希望的任何名称。
- 4. 安装yarn。
- 5. 输入项目名称和描述。Slug 应该是designcode-app。

转到新项目的文件夹并启动环境。

```t
cd designcode-app
expo start
```

Expo 开发人员工具将在您的浏览器中打开，您将看到这样的页面。

![https://images.ctfassets.net/ooa29xqb8tix/7z8EYxwJflH3ch5FgigE1o/6a07c016d9f105d0ddbb4887a1a2f701/createProject.png](https://images.ctfassets.net/ooa29xqb8tix/7z8EYxwJflH3ch5FgigE1o/6a07c016d9f105d0ddbb4887a1a2f701/createProject.png)

## 在 iOS 模拟器上预览

您可以单击按钮Run on iOS Simulator。这将自动打开 iOS 模拟器。留出一些时间来构建 Javascript 包，您将看到 Expo 屏幕。单击知道了。瞧！您的第一个应用程序正在运行！

![https://images.ctfassets.net/ooa29xqb8tix/10b0L44A4GB3MTFdmdZw96/e070f62eed012c67dc2ff150d762c345/iOS.png](https://images.ctfassets.net/ooa29xqb8tix/10b0L44A4GB3MTFdmdZw96/e070f62eed012c67dc2ff150d762c345/iOS.png)

为了预览您的第一个应用程序，请确保安装了[Xcode](https://developer.apple.com/xcode/)，这将使您能够访问其 iOS 模拟器。您可以将设备更改为长列表中的任何设备：iPad、iPhone X、iPhone 8 等。

![https://images.ctfassets.net/ooa29xqb8tix/3tJDhK6liXOKRaO6KzH5pU/90fd79217710eef2371d09f748aeb7d0/iOS2.png](https://images.ctfassets.net/ooa29xqb8tix/3tJDhK6liXOKRaO6KzH5pU/90fd79217710eef2371d09f748aeb7d0/iOS2.png)

一些提示：

- 1. **Command + R**刷新页面。
- 2. 如果出现问题，只需**Command + Q**模拟器，然后再次单击在 iOS 模拟器上运行。
- 3. 转到硬件 >**设备**以更改设备。
- 4. 执行**Command + 右箭头**或左箭头可在纵向和横向之间切换。
- 5. **Command + 1**和**2**将分别使模拟器的物理尺寸（更小）或像素准确。您还可以通过将鼠标悬停在设备的角落来调整设备的大小。

## 在 Android 模拟器上预览

下载[Android Studio](https://developer.android.com/studio/)以在 Android 模拟器中预览您的应用。安装后，创建一个新项目（使用默认设置）并等待大约 5 分钟以构建内容，直到您看到 Play 图标变为绿色。点击它。从那里，创建一个新的虚拟设备并在其上下载最新的 Android 操作系统。

![https://images.ctfassets.net/ooa29xqb8tix/7ovAbQdDmfUxQZSTYRqnJp/27a0c5ffdf08adf6c405cbf11487c72c/android.png](https://images.ctfassets.net/ooa29xqb8tix/7ovAbQdDmfUxQZSTYRqnJp/27a0c5ffdf08adf6c405cbf11487c72c/android.png)

完成后，它将在模拟器中启动 Android Studio 项目。

![https://images.ctfassets.net/ooa29xqb8tix/2SoG5l0GOoJPupR8x7e4NN/8e33161a7493f3f311ff602927a2606d/android2.png](https://images.ctfassets.net/ooa29xqb8tix/2SoG5l0GOoJPupR8x7e4NN/8e33161a7493f3f311ff602927a2606d/android2.png)

从现在开始，您可以单击Expo 开发人员工具中的在 Android 设备/模拟器上运行按钮。这将使用模拟器测试您的应用程序。

## 在设备上预览

确保在您的手机上安装 Expo [iOS 应用程序](https://itunes.apple.com/app/apple-store/id982107779)和[Android 应用程序](https://play.google.com/store/apps/details?id=host.exp.exponent)。安装 Expo 后，您可以使用相机应用程序扫描仪表板中的二维码。您的手机会询问您是否要使用 Expo 打开链接。然后，它会自动打开您的应用程序。挺整洁的！

## 下载 VSCode

要编辑您的代码，您需要[Visual Studio Code](https://code.visualstudio.com/)。由于其广泛的功能和扩展列表，它是目前市场上最好的代码编辑器。

**将您的designcode-app**文件夹从“下载”拖放到 Visual Studio Code 应用图标。这将打开项目文件。

![https://images.ctfassets.net/ooa29xqb8tix/7qNyKS8SQRfG9SvoLsJglI/3f9e215340f624c8b9561b6b142b4e75/vscode.png](https://images.ctfassets.net/ooa29xqb8tix/7qNyKS8SQRfG9SvoLsJglI/3f9e215340f624c8b9561b6b142b4e75/vscode.png)

## VSCode 扩展

从左侧菜单中，您可以导航到“扩展”选项卡并安装新的。搜索以下扩展来安装它们。确保单击Install，然后单击Reload。

![https://images.ctfassets.net/ooa29xqb8tix/6cunEL7ycqp3tCN0p6ndxs/da26a89434bb2121a5fdc09855ca2489/vscode-extension.png](https://images.ctfassets.net/ooa29xqb8tix/6cunEL7ycqp3tCN0p6ndxs/da26a89434bb2121a5fdc09855ca2489/vscode-extension.png)

- 1. [Material Theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme) – 这是我个人使用的主题。它看起来很棒，并且有多种颜色主题，具体取决于您的心情。图标集合也是一个不错的选择。

- 2. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)——这个扩展非常适合初学者，因为它可以确保你的代码总是很好地缩进和格式化。每次保存时，它都会使您的代码保持一致。

- 3. [styled-component](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)——因为我们将使用样式化组件，这将确保我们将突出显示 CSS 代码。

- 4. [GraphQL for VSCode](https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode) – GraphQL 代码的代码高亮。

## Git

如果您安装了[Git](https://git-scm.com/)，您可能会看到您的文件旁边有一堆字母。每次进行重大更新时，您都需要提交。

为此，请按Command + Shift + P激活命令面板。这使您可以通过键入快速找到任何命令。选择全部提交，然后按 Enter。像初始提交一样写下您的提交消息，然后再次按 Enter。因此，您只会看到新的更改。

![https://images.ctfassets.net/ooa29xqb8tix/XfnEMswLHGpXFU3kKVobD/db921a18885875d6c783d29949d6aba5/git.png](https://images.ctfassets.net/ooa29xqb8tix/XfnEMswLHGpXFU3kKVobD/db921a18885875d6c783d29949d6aba5/git.png)

如果你碰巧有 Github，你可以简单地创建一个新的存储库并将其链接到这个项目。

## 设置材质主题

再次执行 Command + Shift + P 并选择**Preferences: Color Theme**。选择更深的材质主题。重新加载 VScode 以查看新图标！

![https://images.ctfassets.net/ooa29xqb8tix/44PWc7YooWuxs4GLjlFNIE/67474a2bae3bb020f5b002007ece65d9/material-theme.png](https://images.ctfassets.net/ooa29xqb8tix/44PWc7YooWuxs4GLjlFNIE/67474a2bae3bb020f5b002007ece65d9/material-theme.png)

## 导入资产

右键单击资产文件夹并选择在 Finder 中显示。现在，您可以将下载的所有资产文件移动到项目的资产文件夹中。

![https://images.ctfassets.net/ooa29xqb8tix/2Pj8rJukkbBX04XnZcVAul/e6d57bd44703a6c187c18846d4c82730/assets.png](https://images.ctfassets.net/ooa29xqb8tix/2Pj8rJukkbBX04XnZcVAul/e6d57bd44703a6c187c18846d4c82730/assets.png)

## 应用配置

在`app.json`中，您可以更改应用程序的设置，例如应用程序名称、描述等。随意更改最适合您的应用程序的描述。

```js
"orientation": "default",
"icon": "./assets/icon.png",
"splash": {
  "image": "./assets/splash.png",
  "resizeMode": "contain",
  "backgroundColor": "#f0f3f5"
},
```

## 方向

默认情况下，方向将限制为纵向。由于我们的应用程序适用于平板电脑和手机，因此我们将其设置为默认值，这意味着它也适用于 Landscape。

## 应用程序图标

图标应设计为192x192。React Native 在 Android 和 iOS 的不同地方使用时会自动调整图像大小。此外，在导出为 PNG 时，请确保有背景颜色。

## 启动画面

一种流行的设计方法是简单地将您的徽标放在它的中心，并使用自定义背景颜色。分辨率应为414x812 @ 3x，即1242x2436 像素。

启动画面不能适应不同的分辨率，所以你不能让它看起来像一个加载屏幕，这是众所周知的苹果为设置、音乐和应用商店等应用程序所做的技术。

## 项目结构

您需要注意的主要文件如下：

- **assets**文件夹：这是您放置所有本地图像和图标的地方。
- **App.js** - 这就是一切的开始。您的应用将在首次加载时引用此文件。它有点像 index.html。
- **app.json** - 您的应用配置，您可以在其中设置应用名称、图标、加载屏幕、方向、包标识符等。

## react代码

```jsx
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      // ...
    );
  }
}
```

## 基本组件

```jsx
    import { StyleSheet, Text, View } from "react-native";
```

与使用 div 和 p 标签的 Web 不同，移动设备有自己的一组标签，只是它们以大写字母开头。

- 1. 查看 - 这适用于任何容器。它就像 Web 中的 div。
- 2. 文本 - 对于任何文本，您绝对需要在文本中换行。

## CSS 样式表

React Native 使用与构建站点相同的所有 CSS 属性。与 Web 不同，您无需创建 .css 文件来存储样式。相反，这一切都发生在与屏幕相同的文件中。

```jsx
<View style={styles.container}></View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
```

## 弹性盒

如果你还没有学习过 Flexbox，这将是一个好时机。基本上，它允许您设置行和列，非常容易地水平和垂直对齐项目。React Native 在他们的指南中突出使用了 Flexbox。

Flex: 1 表示它将占用容器的整个空间。在这种情况下，它是整个设备屏幕。

```css
flex: 1
```

## VSCode 集成终端

虽然终端应用程序非常适合安装所有必要的工具，但 VSCode 中的集成终端对于安装其他库非常方便。如果您愿意，您绝对可以使用它而不是终端。

要访问集成终端，请执行**Command + `**。

## CSS

React Native 使用与构建站点相同的所有 CSS 属性。与 Web 不同，您无需创建 .css 文件来存储样式。相反，这一切都发生在与屏幕相同的文件中。