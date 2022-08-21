// ignore_for_file: file_names

import 'package:flutter/material.dart';
import 'package:dot_navigation_bar/dot_navigation_bar.dart';

class MyWidget extends StatefulWidget {
  const MyWidget({Key? key}) : super(key: key);

  @override
  State<MyWidget> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<MyWidget> {
  static const List<DotNavigationBarItem> items = [];
  @override
  Widget build(BuildContext context) {
    return DotNavigationBar(items: items);
  }
}
